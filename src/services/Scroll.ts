const MARGIN_OFFSET = 80; // TODO remove magic number (because of margin)

export function GetScrollTop(elem: HTMLElement) {
  return elem.offsetTop - MARGIN_OFFSET;
}

export function AtView(scrollingElem: Element, viewElem: HTMLElement): boolean {
  const viewOffsetTop = GetScrollTop(viewElem);
  const viewOffsetBottom = viewOffsetTop + viewElem.clientHeight;
  return (
    scrollingElem.scrollTop > viewOffsetTop &&
    scrollingElem.scrollTop < viewOffsetBottom
  );
}

export function ScrollTo(scrollingElem: Element, viewElem: HTMLElement) {
  scrollingElem.scrollTop = viewElem.offsetTop;
}
