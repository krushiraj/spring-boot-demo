# Presentations

These are [Marp](https://marp.app/) slide decks written in Markdown. They can be viewed and presented using:

## How to Use

### Option 1: VS Code (Recommended)
1. Install the **Marp for VS Code** extension: `marp-team.marp-vscode`
2. Open any `.md` file in this folder
3. Click the **Marp preview** icon in the top-right corner
4. To present: Click the **Marp slide deck** icon → "Open Slide Deck"

### Option 2: Export to PPTX/PDF
```bash
# Install Marp CLI
npm install -g @marp-team/marp-cli

# Export to PPTX
marp 01-springboot.md --pptx --allow-local-files

# Export to PDF
marp 01-springboot.md --pdf --allow-local-files

# Export all
for f in *.md; do marp "$f" --pptx --allow-local-files; done
```

### Option 3: HTML (for browser presentation)
```bash
marp 01-springboot.md --html --allow-local-files
# Open the generated HTML file in a browser, press F11 for fullscreen
```

## Slide Decks

| File | Topic | Slides |
|------|-------|--------|
| [01-springboot.md](01-springboot.md) | Spring Boot (Unit III) | ~40 slides |
| [02-react.md](02-react.md) | React (Unit IV) | ~40 slides |
| [03-nodejs-mongodb.md](03-nodejs-mongodb.md) | Node.js & MongoDB (Unit V) | ~35 slides |

## Speaker Notes

Each slide includes speaker notes (text after `<!-- -->` comments). These notes:
- Are visible only to you in presenter view
- Contain talking points, explanations, and reminders
- Won't be shown to students on the projected screen

In VS Code Marp, use "Open Slide Deck" and enable presenter view (press P) to see notes.
