import React from 'react'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  self: {
    position: 'relative',
    width: '160px',
    height: '160px',
    backgroundColor: 'yellow',
    border: '2px solid #969696',
    display: 'block',
    verticalAlign: 'text-bottom',
    borderRadius: '5px',
  },
})

const TestComponent = () => (
  <div className={styles({ self: true })}>
    TestComponent
  </div>
)

export default TestComponent
