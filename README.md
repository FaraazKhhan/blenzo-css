# NoStyle CSS (ver-1.0)

---

NoStyle CSS is a custom made CSS utility classes library.
It was created for my own use, because I am too lazy to design my buttons, headings again and again, only if they follow same theme.

#### Simple add these imports according to your prefence and add class-list mentioned below as per need.

- Standard File:

  > https://github.com/FaraazKhhan/nostyle-css/blob/master/css/nostyle.css

- Minified version:

  > https://github.com/FaraazKhhan/nostyle-css/blob/master/css/nostyle-min.css

## Here are some example:

---

- **Themes**
  If you want to use NoStyle light or dark theme, then simply add `data-theme = dark` attribute in your html tag like this:

```
<html data-theme = "dark">
```

It will change all the colors under-the-hood.

- **Buttons**

  - > btn
  - > btn-primary
  - > btn-secondary
  - > btn-warning
  - > btn-info
  - > btn-danger
  - > btn-mute

- **Button Sizes**

  - > btn-sm
  - > btn-lg

- **Button with icons**

  - > btn-home-icon
  - > btn-link-icon
  - > btn-externlink-icon
  - > btn-eyeopen-icon
  - > btn-eyeclose-icon
  - > btn-edit-icon
  - > btn-save-icon
  - > btn-trash-icon

- **Margins**

  - > mx-auto
  - > m-0, m-015, m-025, m-05, m-1, m-2, m-3, m-4
  - > my-0, my-015, my-025, my-05, my-1, my-2, my-3, my-4
  - > mx-0, mx-015, mx-025, mx-05, mx-1, mx-2, mx-3, mx-4

- **Paddings**
  - > p-0, p-015, p-025, p-05, p-1, p-2, p-3, p-4
  - > py-0, py-015, py-025, py-05, py-1, py-2, py-3, py-4
  - > px-0, px-015, px-025, px-05, px-1, px-2, px-3, px-4

_(Note: Paddings and Margins are based on EM unit, which is best in resizings. And 015, 025, 05 are same as 0.15em, 0.25em and 0.5em)_

- **Headings**

  - > heading
  - > sub-heading
  - > pre-heading

- **Titles (section-title)**

  - > section-title
  - > section-subtitle
  - > section-pretitle

- **Forms**

  - Label & Input wrapper

    - > input-wrapper

  - Form Label

    - > form-label

  - Form Input, and Textarea

    - > form-control

  - Checkbox
    For Checkbox you have to write this instead of normal checkbox:
    ```
    <div class="checkbox-wrapper">
      <input type="checkbox" class"form-check" id="demo-checkbox" >
      <label for="demo-checkbox" class="form-check-label">
    </div>
    ```
    And this will create a custom styled checkbox for you.

- **Section Size**

  - > section-sm

- **Social-media Icons Container**
  - Horizontal
    - > social-container
  - Vertical
    - > social-container-y

#### _More classes will be added soon_

---

### Feel free to contact, if you wan to contribute in this project.

Text me on my Instagram account: [Instagram](https://www.instagram.com/faraazy)

**Peace** ✌
