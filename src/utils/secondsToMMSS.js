import moment from "moment/moment"

export default (seconds) => moment.utc(seconds * 1000).format("mm:ss")