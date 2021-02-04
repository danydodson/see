import { makeStyles } from '@material-ui/styles'

export default makeStyles(theme => ({
  inputGroup: {
    marginBottom: '1rem'
  },
  textInput: {
    // marginTop: theme.spacing(2),
    padding: '.5rem',
    fontSize: '16px',
    width: '100%',
    display: 'block',
    borderRadius: '4px',
    border: '1px solid #ccc'
  },
  label: {
    fontWeight: 'bold',
    display: 'block',
    marginBottom: '.5rem'
  },
  error: {
    borderColor: 'red'
  },
  inputFeedback: {
    color: '#999',
    marginTop: '.25rem'
  },
  animated: {
    animationDuration: '1s',
    animationFillMode: 'both'
  },
  keyframesShake: {
    fromTo: {
      transform: 'translate3d(0, 0, 0)'
    },
    10: {
      transform: 'translate3d(-10px, 0, 0)'
    },
    30: {
      transform: 'translate3d(-10px, 0, 0)'
    },
    50: {
      transform: 'translate3d(-10px, 0, 0)'
    },
    70: {
      transform: 'translate3d(-10px, 0, 0)'
    },
    90: {
      transform: 'translate3d(-10px, 0, 0)'
    },
    20: {
      transform: 'translate3d(10px, 0, 0)'
    },
    40: {
      transform: 'translate3d(10px, 0, 0)'
    },
    60: {
      transform: 'translate3d(10px, 0, 0)'
    },
    80: {
      transform: 'translate3d(10px, 0, 0)'
    }
  },
  shake: {
    animationName: 'shake'
  }
}))
