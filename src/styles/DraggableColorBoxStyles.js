import chroma from "chroma-js";

const styles = {
  root: {
    width: '20%',
    height: '25%',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    maxWidth: '384px;',
    margin: '-3.5px',
    "&:hover svg": {
      color: '#fff',
      transform: 'scale(1.5)'
    }
  },
  boxContent: {
    position: "absolute",
    width: '100%',
    left: '0px',
    bottom: '0px',
    padding: '10px',
    color: props =>
      chroma(props.color).luminance() <= 0.08 ? "rgba(255,255,255,0.8)" : "rgba(0,0,0,0.5)",
    letterSpacing: '1px',
    textTransform: 'uppercase',
    fontSize: '12px',
    display: 'flex',
    justifyContent: 'space-between'
  },
  deleteIcon: {
    transition: 'all 0.3s ease-in-out'
  }
}

export default styles;