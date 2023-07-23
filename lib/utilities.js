import { parseISO, format } from 'date-fns'
import { romanize } from 'romans'

export const toRomanDate = (date) => {
	return `${format(parseISO(date), `dd `)} 
  ${romanize(parseISO(date).getMonth() + 1)} 
  ${format(parseISO(date), ` y`)}`
}
