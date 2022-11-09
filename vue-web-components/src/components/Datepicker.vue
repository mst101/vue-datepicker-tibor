<template>
    <section class="ly-container js__anim">
        <div class="md-params" data-delay="auto">
            <div>
                <h3>Datepicker</h3>
                <div class="inputs input-daterange">
                    <div class="md-form">
                        <div class="label">Date From</div>
                        <div class="datepicker-wrapper">
                            <datepicker
                                placeholder=""
                                @selected="selectDate()"
                                @opened="opened()"
                                @closed="closed()"
                                @cleared="cleared()"
                                v-model="dateFrom"
                                :language="sk"
                                :disabled-dates="disabledDatesFrom"
                                :highlighted="highlighted"
                                format="d.M.yyyy"
                                first-day-of-week="mon"
                                :typeable="true"
                                :show-calendar-on-focus="true"
                            >
                            </datepicker>

                        </div>
                    </div>
                    <div class="md-form">
                        <div class="label">Date To </div>
                        <div class="datepicker-wrapper">
                            <datepicker
                                placeholder=""
                                @selected="selectDate()"
                                v-model="dateTo"
                                :language="sk"
                                :disabled-dates="disabledDatesTo"
                                :highlighted="highlighted"
                                format="d.M.yyyy"
                                first-day-of-week="mon"
                                :typeable="true"
                                :show-calendar-on-focus="true"
                            >
                            </datepicker>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<script>
// import Datepicker from '@sum.cumo/vue-datepicker/dist/Datepicker.esm'
// import { sk } from '@sum.cumo/vue-datepicker/dist/locale/index.esm'
import Datepicker from '../packages/vue-datepicker/components/Datepicker'
import sk from '../packages/vue-datepicker/locale/translations/sk'

import {sk as chartSk} from 'date-fns/locale';

const state = {
    date1: new Date()
};

export default {
    name: 'DatePickerTest',
    props: ['lang'],
    data() {
        return {
            date: new Date(),
            dateFrom: new Date(),
            dateTo: new Date(),
            dateFromMonthsBack: 3,
            startDate: "",
            disabledDatesFrom: {
                from: "",
                to: ""
            },
            disabledDatesTo: {
                from: "",
                to: ""
            },
            dateRange: {},
            sk: sk
        }
    },
    computed: {
        highlighted() {
            let self = this;
            return {
                from: self.dateFrom,
                to: self.dateTo
            }
        }
    },
    methods: {
        setDisabledDates(){
            let self = this
            self.disabledDatesFrom = {
                from: self.dateTo,
                to: new Date(1970, 0, 1)
            }
            self.disabledDatesTo = {
                from: new Date(),
                to: self.dateFrom
            }
        },
        selectDate(){
            let self = this
            console.log('selectDate')

            setTimeout(() => {
                this.loadProduct()
            }, 1000);

        },
        opened(){
            console.log('opened')
        },
        closed(){
            console.log('closed')
        },
        cleared(){
            console.log('cleared')
        },
        initData() {
            console.log('initData')
        },
        setDateFrom() {
            let d = new Date()
            d.setMonth(d.getMonth() - this.dateFromMonthsBack)
            this.dateFrom = d
        }
    },
    components: {
        Datepicker
    },
    mounted() {
        this.setDateFrom()
        this.initData()
        this.setDisabledDates()
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import '~@sum.cumo/vue-datepicker/dist/Datepicker.css';
</style>

<style scoped lang="scss">
.inputs {
    display: flex;
}
.md-form {
    margin: 20px;
}
</style>
