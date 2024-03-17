# Config Driven UI with React

This project is a template for creating web applications using a Config Driven UI architecture with React. It allows you to create dynamic and configurable user interfaces using a JSON configuration file.

## Installation

1. Clone this repository or download the ZIP file.

```bash
git clone https://github.com/alonsarias/config-driven-ui
```

2. Navigate to the project directory.

```bash
cd config-driven-ui
```

3. Install the dependencies.

```bash
npm install
```

## Usage

1. Define the structure of your user interface in a JSON file following the format provided in the "Configuration Example" section.
2. Import the `Renderer` component in your application and pass the configuration as a prop.
3. The `Renderer` component will render the user interface dynamically based on the provided configuration.

```javascript
import Renderer from "./Renderer";
import configExample from "./configExample.json";

function App() {
  return <Renderer configUI={configExample} />;
}

export default App;
```

4. Run the application.

```bash
npm run dev
```

5. Open your browser and visit `http://localhost:5173` to see the application in action.

## Configuration Example

The following is an example of how the configuration structure in a JSON file might look like:

```json
{
  "component": "Card",
  "config": {},
  "children": [
    {
      "component": "Heading",
      "config": { "copy": "Hello World" },
      "children": []
    },
    {
      "component": "Button",
      "config": { "copy": "Click Me!" },
      "children": []
    }
  ]
}
```

This JSON file defines a `Card` with a `Heading` and a `Button`. Each component can have its own configuration and can contain children recursively.

You can import or add any custom component, or any component from libraries such as Material UI, Shadcn UI, etc. Simply import the desired component into `Renderer` and include it in the configuration file as needed.
