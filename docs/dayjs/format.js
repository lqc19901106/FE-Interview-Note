/**
 * 占位补充
 */
const padStart = (string, length, pad) => {
  const s = String(string)
  if (!s || s.length >= length) return string
  return `${Array((length + 1) - s.length).join(pad)}${string}`
}




export const REGEX_PARSE = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/;
export const REGEX_FORMAT = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;

const parseDate = (cfg) => {
  const { date, utc } = cfg
  if (date === null) return new Date(NaN) // null is invalid
  if (Utils.u(date)) return new Date() // today
  if (date instanceof Date) return new Date(date)
  if (typeof date === 'string' && !/Z$/i.test(date)) {
    const d = date.match(C.REGEX_PARSE)
    if (d) {
      const m = d[2] - 1 || 0
      const ms = (d[7] || '0').substring(0, 3)
      if (utc) {
        return new Date(Date.UTC(d[1], m, d[3]
          || 1, d[4] || 0, d[5] || 0, d[6] || 0, ms))
      }
      return new Date(d[1], m, d[3]
          || 1, d[4] || 0, d[5] || 0, d[6] || 0, ms)
    }
  }

  return new Date(date) // everything else
}

format(formatStr) {
    if (!this.isValid()) return C.INVALID_DATE_STRING

    const str = formatStr || C.FORMAT_DEFAULT
    const zoneStr = Utils.z(this)
    const locale = this.$locale()
    const { $H, $m, $M } = this
    const {
      weekdays, months, meridiem
    } = locale
    const getShort = (arr, index, full, length) => (
      (arr && (arr[index] || arr(this, str))) || full[index].substr(0, length)
    )
    const get$H = num => (
      Utils.s($H % 12 || 12, num, '0')
    )

    const meridiemFunc = meridiem || ((hour, minute, isLowercase) => {
      const m = (hour < 12 ? 'AM' : 'PM')
      return isLowercase ? m.toLowerCase() : m
    })

    const matches = {
      YY: String(this.$y).slice(-2),
      YYYY: this.$y,
      M: $M + 1,
      MM: Utils.s($M + 1, 2, '0'),
      MMM: getShort(locale.monthsShort, $M, months, 3),
      MMMM: getShort(months, $M),
      D: this.$D,
      DD: Utils.s(this.$D, 2, '0'),
      d: String(this.$W),
      dd: getShort(locale.weekdaysMin, this.$W, weekdays, 2),
      ddd: getShort(locale.weekdaysShort, this.$W, weekdays, 3),
      dddd: weekdays[this.$W],
      H: String($H),
      HH: Utils.s($H, 2, '0'),
      h: get$H(1),
      hh: get$H(2),
      a: meridiemFunc($H, $m, true),
      A: meridiemFunc($H, $m, false),
      m: String($m),
      mm: Utils.s($m, 2, '0'),
      s: String(this.$s),
      ss: Utils.s(this.$s, 2, '0'),
      SSS: Utils.s(this.$ms, 3, '0'),
      Z: zoneStr // 'ZZ' logic below
    }

    return str.replace(C.REGEX_FORMAT, (match, $1) => $1 || matches[match] || zoneStr.replace(':', '')) // 'ZZ'
  }