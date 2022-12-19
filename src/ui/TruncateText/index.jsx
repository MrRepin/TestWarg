import { useCallback, useEffect, useState } from 'react';

import styles from './styles.module.css';

let observer = null;

export const TruncateText = (props) => {
  const { children } = props;

  const [lineClamp, setLineClamp] = useState(1);

  const wrapper = useCallback((node) => {
    if (node) {
      changeLineClamp(node);

      observer = new ResizeObserver(() => changeLineClamp(node));

      observer.observe(node.parentNode);
    }
  }, []);

  const changeLineClamp = (node) => {
    const offsetHeight = node.parentNode.offsetHeight;
    const lineHeight = node.style.lineHeight;
    const newLineClamp = Math.floor(offsetHeight / +`${lineHeight.replace('px', '')}`);

    setLineClamp((prevState) => {
      if (prevState !== newLineClamp) {
        return newLineClamp;
      }

      return prevState;
    });
  };

  const style = {
    lineHeight: '16px',
    WebkitLineClamp: lineClamp,
  };

  useEffect(() => {
    return () => {
      console.log('re')
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={wrapper}
      style={style}
      className={styles.truncateText}
    >
      { children }
    </div>
  );
};