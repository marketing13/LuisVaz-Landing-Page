import moment from 'moment'
import { useTimestamp } from '@vueuse/core'

enum TheMoment {
  running,
  waiting,
  tomorrow,
}

export class LiveTime {
  private moments: Ref<Array<{ time: moment.Moment, duration: number }>> = ref([]);
  private past_moments: Ref<Array<{ time: moment.Moment, duration: number }>> = ref([]);
  private currentTime = useTimestamp({ offset: 0 });
  private nextTime = computed(() => {
    return this.moments.value.at(0)
  })  
  private pastTime = computed(() => {
    return this.past_moments.value.at(0)
  })
  private duration = computed(() => moment.duration(this.nextTime.value?.time.diff(this.currentTime.value)))
  private pendingTime = computed(() => ({
    hours: Math.floor(this.duration.value.asHours()),
    minutes: Math.floor(this.duration.value.asMinutes()) % 60,
    seconds: Math.floor(this.duration.value.asSeconds()) % 60
  }))
  add(time: moment.Moment, duration: number) {
    if (time) {
      this.moments.value.push({ time, duration })
      this.past_moments.value.push({ time, duration })
      this.moments.value = this.moments.value.filter(mo => mo.time.isAfter(moment(this.currentTime.value)));
      this.past_moments.value = this.past_moments.value.filter(mo => mo.time.isBefore(moment(this.currentTime.value)));
      this.moments.value.sort((a, b) => a.time.isBefore(b.time) ? -1 : 1)
      this.past_moments.value.sort((a, b) => a.time.isAfter(b.time) ? -1 : 1)
    }
  }
  getNextTime() { return this.nextTime.value }
  getPastTime() { return this.nextTime.value }
  getPendingTime() { return computed(() => this.pendingTime.value) }
  getStatus() {
    return computed(() => {
      if (!moment(this.nextTime.value?.time).isValid()) return TheMoment.tomorrow;
      if (this.pastTime.value?.time && moment(this.currentTime.value).isBetween(this.pastTime.value?.time, moment(this.pastTime.value?.time).add(this.pastTime.value?.duration, 'h'))) return TheMoment.running;
      if (moment(this.currentTime.value).isAfter(moment(this.nextTime.value?.time).add(1, 'h'))) return TheMoment.tomorrow;
      if (!this.nextTime.value) return TheMoment.tomorrow;
      if (moment(this.currentTime.value).isBefore(this.nextTime.value?.time)) return TheMoment.waiting;
      return TheMoment.running;
    })
  }
  getStatusEnum() {
    return TheMoment
  }
} 