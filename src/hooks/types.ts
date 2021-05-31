export interface IModalHook {
  showModal: () => void;
  hideModal: () => void;
  RenderModal: ({ children }: { children: React.ReactChild }) => JSX.Element;
}
