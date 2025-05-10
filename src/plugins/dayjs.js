import dayjs from 'dayjs'
import uk from 'dayjs/locale/uk'
import duration from 'dayjs/plugin/duration'
import relativeTime from 'dayjs/plugin/relativeTime'
import quarterOfYear from 'dayjs/plugin/quarterOfYear'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import objectSupport from 'dayjs/plugin/objectSupport'
import advancedFormat from 'dayjs/plugin/advancedFormat'
import weekOfYear from 'dayjs/plugin/weekOfYear'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'

export default {
  install() {
    dayjs.locale(uk)
    dayjs.extend(duration)
    dayjs.extend(relativeTime)
    dayjs.extend(quarterOfYear)
    dayjs.extend(utc)
    dayjs.extend(timezone)
    dayjs.extend(objectSupport)
    dayjs.extend(advancedFormat)
    dayjs.extend(weekOfYear)
    dayjs.extend(isSameOrBefore)
    dayjs.extend(isSameOrAfter)
    dayjs.extend((dayjsOption, dayjsClass) => {
      dayjsClass.prototype.toISODateString = function () {
        return this.format('YYYY-MM-DD')
      }
    })
  },
}
