import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  components: {
    FormError: {
      baseStyle: {
        text: {
          height: '16px',
        },
      },
    },
  },
})

export default theme
