function canAttendMeetings(intervals: [number, number][]) {
  intervals.sort(([firstStart], [secondStart]) => firstStart - secondStart);

  for (let i = 1; i < intervals.length; i++) {
    const [, prevEnd] = intervals[i - 1];
    const [start] = intervals[i];

    if (prevEnd > start) {
      return false;
    }
  }

  return true;
}
