const MARGIN_OFFSET = 80; // TODO remove magic number (because of margin)
const TOP_MARGIN_GHOST_DISTANCE = 100;
const INCREMENT = 20;
const DEFAULT_DURATION_MILLISECONDS = 1000;

export function GetScrollTop(elem: HTMLElement) {
  return elem.offsetTop - MARGIN_OFFSET;
}

export function CloseToPageTop(scrollingElem: Element) {
  return scrollingElem.scrollTop < TOP_MARGIN_GHOST_DISTANCE;
}

export function AtView(scrollingElem: Element, viewElem: HTMLElement): boolean {
  const viewOffsetTop = GetScrollTop(viewElem);
  const viewOffsetBottom = viewOffsetTop + viewElem.clientHeight;
  return (
    scrollingElem.scrollTop > viewOffsetTop &&
    scrollingElem.scrollTop < viewOffsetBottom
  );
}

export function ScrollTo(
  scrollingElem: Element,
  viewElem: HTMLElement,
  onComplete: () => void
) {
  const duration = DEFAULT_DURATION_MILLISECONDS;

  const start = scrollingElem.scrollTop;
  const to = GetScrollTop(viewElem);
  const change = to - start;
  let currentTime = 0;

  const animateScroll = () => {
    currentTime += INCREMENT;
    const val = easeInOutQuad(currentTime, start, change, duration);
    scrollingElem.scrollTop = val;
    if (currentTime < duration) {
      window.requestAnimationFrame(animateScroll);
    } else {
      onComplete();
    }
  };

  animateScroll();
}

const easeInOutQuad = (
  currentTime: number,
  startPos: number,
  deltaPos: number,
  duration: number
): number => {
  currentTime /= duration / 2;
  if (currentTime < 1) {
    return (deltaPos / 2) * currentTime * currentTime + startPos;
  }
  currentTime--;
  return (-deltaPos / 2) * (currentTime * (currentTime - 2) - 1) + startPos;
};
