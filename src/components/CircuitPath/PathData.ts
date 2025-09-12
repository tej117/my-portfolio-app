// src/HomePage/PathData.ts

export interface PathSegment {
  id: string;
  getCoords: () => { x: number; y: number }[];
  duration?: number;
  color?: string;
}

function getCoordsFromRef(ref: React.RefObject<HTMLDivElement | null>, yOffset = 0) {
  if (!ref.current) return null;
  const rect = ref.current.getBoundingClientRect();
  return {
    x: rect.left + rect.width / 2 + window.scrollX,
    y: rect.top + rect.height / 2 + window.scrollY + yOffset
  };
}

export const createLandingToResumeSegment = (
  resumeRef: React.RefObject<HTMLDivElement | null>,
  anchorRefs: React.RefObject<HTMLDivElement | null>[],
  resumeYOffset = 0
): PathSegment => ({
  id: 'landingToResume',
  getCoords: () => {
    const resumeCoords = resumeRef.current
      ? {
          x: resumeRef.current.getBoundingClientRect().left + resumeRef.current.offsetWidth/2 + window.scrollX,
          y: resumeRef.current.getBoundingClientRect().top + resumeRef.current.offsetHeight/2 + window.scrollY + resumeYOffset
        }
      : null;

    const anchors = anchorRefs
      .map(ref => ref.current)
      .filter(Boolean)
      .map(el => ({
        x: el!.getBoundingClientRect().left + el!.offsetWidth/2 + window.scrollX,
        y: el!.getBoundingClientRect().top + el!.offsetHeight/2 + window.scrollY
      }));

    return resumeCoords ? [resumeCoords, ...anchors] : anchors;
  },
  duration: 3000,
  color: '#39A247'
});