# Photoshop-Javascript
This is a javascript for photshop so you can have a safety margin in your projects


# The script

#### The script allows you to have safety margins without having to constantly place or search for the right size.

>[!NOTE]
> For the script to work you need to have `developer mode` activated within photoshop

# How to use

```sh
  Files > script > Put the javascript file
```

# How it works

The script will activate the reference guides and then place them there depending on the size of the image, if it is a feed it will be a certain size and if it is a story the other will be another certain size.

> Part of the script

```sh
if (width == 1080 && height == 1080) {
    // FEED
  doc.guides.add(Direction.HORIZONTAL, 76.531);
  doc.guides.add(Direction.HORIZONTAL, 1003.469);
  doc.guides.add(Direction.VERTICAL, 76.531);
  doc.guides.add(Direction.VERTICAL, 540.0);
  doc.guides.add(Direction.VERTICAL, 1003.469);

  alert("Enabled Tabs.");
} 
```

### Here is an example with tabs enabled

<p align="center">
  <img src="https://github.com/suchsoak/Photoshop-Javascript/blob/main/tabs.png" alt="tabs-img">
</p>

> https://www.instagram.com/max_47___/p/C6oMZXSr32r/?img_index=1

| Documentation |  Links |
| ------ | ------ |
|  Photoshop Javascript |  https://github.com/Adobe-CEP/CEP-Resources/blob/master/Documentation/Product%20specific%20Documentation/Photoshop%20Scripting/photoshop-javascript-ref-2020.pdf
|  Photoshop github | https://github.com/Adobe-CEP/CEP-Resources
|  Developer Mode | https://experienceleague.adobe.com/en/docs/experience-manager-65/content/implementing/developing/components/developer-mode

`GNU General Public License v3.0`
