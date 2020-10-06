import React from 'react';
import PropTypes from 'prop-types';
import { equals } from 'ramda';
import { orange, blue } from '@material-ui/core/colors';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_dark from "@amcharts/amcharts4/themes/dark";

function am4themes_myTheme(target) {
    if (target instanceof am4core.ColorSet) {
      target.list = [
        am4core.color(orange[900]),
        am4core.color(blue[700]),
        am4core.color(orange[500]),
        am4core.color(blue[300]),
      ];
    }
  }

am4core.useTheme(am4themes_animated);
am4core.useTheme(am4themes_dark);
am4core.useTheme(am4themes_myTheme);


class LineChart extends React.Component {

    componentDidMount() {
        this.initChart();
    }

    componentDidUpdate(prevProps) {
        if(!equals(prevProps.data, this.props.data)) {
            if(this.chart._super) {
                this.chart.dispose();
            }
            this.initChart();
        }
    }

    componentWillUnmount() {
        this.chart.dispose();
    }

    initChart() {
        const { data, id } = this.props;
        let chart = am4core.create(id, am4charts.XYChart);

        chart.data = data;

        chart.dateFormatter.inputDateFormat = this.props.dateFormat;

        let title = chart.titles.create();
        title.text = this.props.title;
        title.fontSize = 20;
        title.marginBottom = 10;

        var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
        dateAxis.renderer.minGridDistance = 60;
        dateAxis.startLocation = 0.5;
        dateAxis.endLocation = 0.5;
        dateAxis.baseInterval = {
            timeUnit: "year",
            count: 1
        }

        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.tooltip.disabled = true;
        valueAxis.renderer.minWidth = 35;

        let seriesArray = []

        this.props.series.forEach((serie, index) => {
            seriesArray.push(chart.series.push(new am4charts.LineSeries()));
            seriesArray[index].name = serie.name;
            seriesArray[index].dataFields.dateX = "date";
            seriesArray[index].dataFields.valueY = serie.value;
            seriesArray[index].strokeDasharray = "lineDash";
            seriesArray[index].strokeWidth = 2;
            seriesArray[index].fillOpacity = 0.1;
            seriesArray[index].tooltipText = "{valueY.value}";
        })

        chart.cursor = new am4charts.XYCursor();

        chart.legend = new am4charts.Legend();
        chart.legend.position = "top";

        let scrollbarX = new am4charts.XYChartScrollbar();
        chart.scrollbarX = scrollbarX;
        chart.scrollbarX.parent = chart.bottomAxesContainer;
        chart.scrollbarX.minHeight = 20;

        this.chart = chart;
    }

    render() {
       return <div id={this.props.id} style={{ width: "100%", maxHeight: "500px", minHeight:"350px" }}></div>
    } 
}

LineChart.propTypes = {
    data: PropTypes.object,
    series: PropTypes.object,
    id: PropTypes.string,
    dateFormat: PropTypes.string,
    title: PropTypes.string,
};

export default LineChart;