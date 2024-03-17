import { ReactNode } from "react";

type ConfigUI = {
  component: string;
  config?: {
    [key: string]: ReactNode;
  };
  children?: ConfigUI[];
};

const Renderer = ({ configUI }: { configUI: ConfigUI }) => {
  const renderConfig = (node: ConfigUI) => {
    if (!node) return null;

    const { component, config, children } = node;

    switch (component) {
      case "Card":
        return (
          <div key={crypto.randomUUID()}>
            {children?.map((child) => renderConfig(child))}
          </div>
        );
      case "Heading":
        return (
          <h1 key={crypto.randomUUID()}>
            {config?.copy}
            {children?.map((child) => renderConfig(child))}
          </h1>
        );
      case "Button":
        return (
          <button key={crypto.randomUUID()}>
            {config?.copy}
            {children?.map((child) => renderConfig(child))}
          </button>
        );
      default:
        return null;
    }
  };

  return <>{renderConfig(configUI)}</>;
};

export default Renderer;
