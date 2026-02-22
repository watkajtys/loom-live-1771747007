import time
from playwright.sync_api import sync_playwright

def verify_mix_library():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(viewport={'width': 1280, 'height': 800})
        page = context.new_page()

        # 1. Load the page
        print("Loading page...")
        page.goto("http://localhost:5173")
        
        # Wait for the app to load
        page.wait_for_selector("text=LofiLoom")
        print("Page loaded.")
        time.sleep(2) # Allow animations to settle

        # 2. Check initial state (Golden Hour Mix)
        print("Checking initial state...")
        initial_title = page.locator("h3").filter(has_text="Golden Hour Mix").first
        if initial_title.is_visible():
            print("Initial mix title found.")
        else:
            print("Initial mix title NOT found.")

        # 3. Open Library
        print("Opening Library...")
        # Target the container of the album art.
        # Find the image, then get the parent.
        album_art_container = page.locator("img[alt='Golden Hour Mix']").locator("xpath=..")
        album_art_container.click()
        
        # Wait for library to open
        library_header = page.locator("h2").filter(has_text="Soundscape Library")
        library_header.wait_for(state="visible")
        print("Library opened.")
        time.sleep(1) # Wait for fade in

        # 4. Take screenshot of Library
        print("Taking library screenshot...")
        page.screenshot(path="verification_library.png")

        # 5. Select "Neon Rain"
        print("Selecting 'Neon Rain'...")
        # Locate the card for Neon Rain.
        neon_rain_card = page.locator("div").filter(has_text="Neon Rain").last
        neon_rain_card.click()

        # 6. Verify Library closed and state updated
        print("Verifying update...")
        library_header.wait_for(state="hidden")
        print("Library closed.")
        
        # Check new title in MixerBoard
        new_title = page.locator("h3").filter(has_text="Neon Rain").first
        new_title.wait_for(state="visible")
        print("New mix title 'Neon Rain' visible.")
        
        time.sleep(2) # Wait for background transition

        # 7. Take screenshot of updated state
        print("Taking updated state screenshot...")
        page.screenshot(path="verification_updated.png")

        browser.close()
        print("Verification complete.")

if __name__ == "__main__":
    verify_mix_library()
