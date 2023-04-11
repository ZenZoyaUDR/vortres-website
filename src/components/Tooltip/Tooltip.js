import styles from "./Tooltip.module.css";

export default function Tooltip({ children, text }) {
  return (
    <div className={styles.tooltip}>
      {children}
      <span className={styles.tooltiptext}>{text}</span>
    </div>
  );
}
