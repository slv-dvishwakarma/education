import React from "react";
import { ImageBoxStyleTwo } from "./ImageBoxStyleTwo";
import { ImageBoxStyleOne } from "./ImageBoxStyleOne";
type ComponentType = "style-1" | "style-2";
type ImageContentBox = {
  data: any;
  type: ComponentType;
  imageAlign?: "left" | "right";
};

export const ImageBox = ({ type, imageAlign, data }: ImageContentBox) => {
  const ComponentType: Record<ComponentType, any> = {
    "style-1": ImageBoxStyleOne,
    "style-2": ImageBoxStyleTwo,
  };
  const ImageComponent = ComponentType[type];
  if (!ComponentType) {
    return <div className="text-red-500">Component not found</div>;
  }

  return <ImageComponent data={data} imageAlign={imageAlign} />;
};
