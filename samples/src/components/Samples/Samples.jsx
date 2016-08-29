import React, { PropTypes } from 'react'

import Sample from 'Sample'
import AtMount from './AtMount'
import AtMountTimeout from './AtMountTimeout'
import PropChange from './PropChange'

import styles from './Samples.scss'

const Samples = ({ style, className }) => (
  <div style={style} className={`${styles.samples} ${className}`}>
    <Sample
      className={styles.sample}
      link="AtMount/index.jsx"
      code="export default animate(AtMount, { atMount: true })"
    >
      <AtMount />
    </Sample>

    <Sample
      className={styles.sample}
      link="AtMountTimeout/index.jsx"
      code="export default animate(AtMount, { atMount: true, timeout: 10 })"
    >
      <AtMountTimeout />
    </Sample>

    <Sample className={styles.sample} code="tutu">
      <PropChange ex={2} />
    </Sample>
  </div>
)

Samples.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
}

export default Samples