# \<searchable-dropdown>

## Local Demo with `web-dev-server`

```bash
npm start
```

To run a local development server that serves the basic demo located in `demo/index.html`

## Premise for @filipbech

After taking into consideration the purpose that this web component will have - which is hopefully being a part of Umbraco UI library, I decided that the most suitable approach might be to utilize the LitElement. It comes with many handy things out of the box - binding attributes, attaching shadow DOM, and therefore scoping the styles, templating, and many more. I focused more on building something that works then on making it super pretty. Also, I believe some things shouldn't be overdone when it comes to design and select is one of them. I decided to make the input field the same as search, bit like in autocomplete, but that made things harder and bit buggy, so the component does not work perfectly. This may be something I'd change, on the other hand i think it's more comfortable for the user to have onyl one field instead of two. I wanted to recreate the API of native elements - I was first considering extending those classes and build something on top of native elements, but it is not supported by Safari. What I think is missing in the component you may find in the TODO section of this readme file.

PS. I got so stressed by You asking me about API calls that I decided to make my first one right here in this component (i also wanted to make it with a really long list of options to make sure it works with more than few and I didn't want to type it all in by hand). Therefore you can select from a lovely list of dog breeds.

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

0. Fix bug - options stay filetered after blur and value reset.
1. Add "required" attribute and feedback if the field is left empty.
2. Keyboard support.
3. Make it screen reader friendly.
4. Add button to clear the input field.
5. MAYBE: Refactor search - make component render list from filtered options array instead of turning options display off. Further research on performance and acccesibility needed.
6. Add "debounce" parameter and funcionality.
7. Slots, espacially for option-groups.
8. Make it more pretty.💅

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
