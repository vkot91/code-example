export interface IButton {
  text: string;
  type?: 'submit' | 'reset' | 'button';
  role: string;
  onClickFunc?: () => void;
}
