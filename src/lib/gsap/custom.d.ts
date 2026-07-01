/* eslint-disable */
/* eslint-disable @typescript-eslint/no-explicit-any */
declare module "@/lib/gsap" {
  export * from "gsap";
}

declare module "@/lib/gsap/ScrollTrigger" {
  export { ScrollTrigger } from "gsap/ScrollTrigger";
}

declare module "@/lib/gsap/SplitText" {
  export class SplitText {
    constructor(target: any, vars?: any);
    lines: HTMLElement[];
    words: HTMLElement[];
    chars: HTMLElement[];
    revert(): void;
  }
}

declare module "@/lib/gsap/ScrollSmoother" {
  export class ScrollSmoother {
    static register(gsap: any): void;
    static create(vars: any): ScrollSmoother;
    scroll(): number;
    scrollTop(value?: number): number;
    paused(state?: boolean): boolean;
    kill(): void;
  }
}

declare module "@/lib/gsap/ScrambleTextPlugin" {
  const ScrambleTextPlugin: any;
  export { ScrambleTextPlugin };
}

declare module "@/lib/gsap/DrawSVGPlugin" {
  const DrawSVGPlugin: any;
  export { DrawSVGPlugin };
}

