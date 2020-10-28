# \<searchable-dropdown>

## Local Demo with `web-dev-server`

```bash
npm start
```

To run a local development server that serves the basic demo located in `demo/index.html`

## Stories

1. The user should also be able to search/filter the list to choose from. ✅
2. Your element should have its own tagName, but the API should be like that of the native dropdown. ✅

## Bonus

● Add support for handling changes to the inputs, and for setting the selected value programmatically ✅  
● Make it look nice, without polluting the css of the rest of the page ✅  
● Make it work with only a keyboard  
● Make it screen reader friendly  
● Animate changes ✅  
● Make it emit a change event when the user changes their selection ✅  
● Add a test or two for your element to show you master that as well

## API

You can set component properties by assigning values to following attributes:

1. options { type: Array }  
   You must apply JSON.stringify before passing the array to the attribute.

   example:

   ```js
   listOfOptions = JSON.stringify(data);
   componentElementReference.setAttribute('options', listOfOptions);
   ```

2. selected {type: String}  
   By assigning a value to this attribute you can predefine the choice or set it up programmatically from component's parent level.
   🐞 - value can be set to any value, not only from the options list. Maybe it could be fixed with a propper setter on that attribute.

3. disabled { type: Boolean }  
   You can disable the input adding this attribute to component's custom element.

```html
<searchable-dropdown options="" disabled> </searchable-dropdown>
```

4. placeholder { type: String }  
   This will be shown in th einput field before selection

5. label { type: String }  
   The tiny thing telling you what this field is :)

## Events

1. 'selected'  
   detail: value selected by user

## Theming

You can style the component by defing these custom properties:

```css
:root {
  --animation-time: 0.3s;
  --border: solid 1px var(--primary-color);
  --active: LightBlue; // outline and highlight color
  --background: white;
  --primary-color: Gainsboro; //border and button color
  --text-color: DarkGrey;
  --size: 10; // number of visible options
}
```

## TODO

1. Add "required" attribute and feedback if the field is left empty.
2. Keyboard support.
3. Make it screen reader friendly.
4. Add button to clear the input field.
5. MAYBE: Refactor search - make component render list from filtered options array instead of turning options display off. Further research on performance and acccesibility needed.
6. Add "debounce" parameter and funcionality.
7. Make it more pretty.💅

This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## Installation

```bash
npm i searchable-dropdown
```

## Usage

```html
<script type="module">
  import 'searchable-dropdown/searchable-dropdown.js';
</script>

<searchable-dropdown></searchable-dropdown>
```

## Linting with ESLint, Prettier, and Types

To scan the project for linting errors, run

```bash
npm run lint
```

You can lint with ESLint and Prettier individually as well

```bash
npm run lint:eslint
```

```bash
npm run lint:prettier
```

To automatically fix many linting errors, run

```bash
npm run format
```

You can format using ESLint and Prettier individually as well

```bash
npm run format:eslint
```

```bash
npm run format:prettier
```
