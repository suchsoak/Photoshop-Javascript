# 📷 Photoshop-Javascript

A JavaScript utility for Photoshop that automatically adds safety margins to your projects.

## ✨ Features

- Automatically activates reference guides
- Adjusts guide placement based on image dimensions
- Supports multiple formats (Feed, Story, etc.)
- Simplifies design workflow

> [!NOTE]
> Enable `Developer Mode` in Photoshop for this script to work

## 🚀 Installation

```sh
Files > Script > Add the javascript file
```

## 📖 How It Works

The script detects your image dimensions and places reference guides accordingly:
- **Feed** (1080×1080): Specific guide positions
- **Story**: Different guide positions

### Example Code

```javascript
if (width == 1080 && height == 1080) {
    // FEED - Vertical guides
    doc.guides.add(Direction.VERTICAL, 70.0);
    doc.guides.add(Direction.VERTICAL, 204.281);
    // ... horizontal guides
    alert("Enabled Tabs.");
}
```

### Preview with Guides Enabled

<p align="center">
  <img src="https://github.com/suchsoak/Photoshop-Javascript/blob/main/1080x1080.png" alt="1080x1080-img">
</p>

## 🔗 Resources

| 🎨 **Photopea** | Link |
|---|---|
| Javascript | [photopea.js](https://github.com/suchsoak/Photoshop-Javascript/blob/main/photopea.js) |
| Website | [photopea.com](https://www.photopea.com) |

| 📚 **Documentation** | Link |
|---|---|
| Photoshop Scripting | [Reference PDF](https://github.com/Adobe-CEP/CEP-Resources/blob/master/Documentation/Product%20specific%20Documentation/Photoshop%20Scripting/photoshop-javascript-ref-2020.pdf) |
| Adobe CEP Resources | [GitHub](https://github.com/Adobe-CEP/CEP-Resources) |
| Developer Mode | [Learn More](https://experienceleague.adobe.com/en/docs/experience-manager-65/content/implementing/developing/components/developer-mode) |

---

📄 **License**: GNU General Public License v3.0

👤 **Creator**: [@max_47___](https://www.instagram.com/max_47___/)

