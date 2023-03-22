/// <reference types="./require" />

declare module "culori" {
  export const formatHex;
  export const displayable;
  export const converter;
  export const wcagContrast;
  export const average;
  export const formatHsl;
  export const formatRgb;
  export const parse;
  export const formatCss;
  export const filterDeficiencyProt;
  export const filterDeficiencyDeuter;
  export const filterDeficiencyTrit;
  export const filterGrayscale;
}

declare module "culori/all";
declare module "culori/css";

declare module "culori/fn" {
  export const formatHex;
  export const displayable;
  export const converter;
  export const wcagContrast;
  export const average;
}
