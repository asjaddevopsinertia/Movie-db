import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import "./movieGraph.scss";

export const MovieGraph = ({ data, length, id, toolTip, xAxis }) => {
  useEffect(() => {
    DrawChart(data);
  }, [data]);

  const d3Chart = useRef();

  const margin = { top: 50, right: 30, bottom: 30, left: 60 };

  function DrawChart(data) {
    const chartwidth =
      parseInt(d3.select(`#d3graph${id}`).style("width")) -
      margin.left -
      margin.right;
    const chartheight =
      parseInt(d3.select(`#d3graph${id}`).style("height")) -
      margin.top -
      margin.bottom;

    const svg = d3
      .select(d3Chart.current)
      .attr("width", chartwidth + margin.left + margin.right)
      .attr("height", chartheight + margin.top + margin.bottom);

    // x scale
    const x = d3
      .scaleBand()
      .domain(d3.range(data.length))
      .range([margin.left, chartwidth - margin.right])
      .padding(0.1);

    svg
      .append("g")
      .attr("transform", "translate(0," + chartheight + ")")
      .call(
        d3
          .axisBottom(x)
          .tickFormat((i) => data[i].category)
          .tickSizeOuter(0)
      );

    // y scale
    const y = d3
      .scaleLinear()
      .domain([0, length ? length : 10])
      .range([chartheight, margin.top]);

    svg
      .append("g")
      .attr("transform", "translate(" + margin.left + ",0)")
      .call(d3.axisLeft(y));

    var tooltip = d3.select(`#tooltipArea${id}`).style("opacity", 0);

    const mouseover = (event, d) => {
      tooltip.style("opacity", 1);
    };

    const mouseleave = (event, d) => {
      // tooltip.style("opacity", 0);
    };

    const mousemove = (event, d) => {
      const text = d3.select(`#tooltip-area__text${id}`);
      text.text(`${toolTip + ' ' + d.quantity}`);
      const [x, y] = d3.pointer(event);

      tooltip.attr("transform", `translate(${x}, ${y})`);
    };

    svg.select(`#x${id}`)
    .attr("class", "x label")
    .attr("text-anchor", "end")
    .attr("x", chartwidth - 800)
    .attr("y", chartheight + 45)
    .text("Top 10 Rated Movies");

    svg.select(`#y${id}`)
    .attr("class", "y label")
    .attr("text-anchor", "end")
    .attr("y", 5)
    .attr("dy", ".75em")
    
    .attr("transform", "rotate(-90)")
    .text(`${xAxis}`);
    // Draw bars
    svg
      .select(`#plotarea${id}`)
      .attr("fill", "#65f0eb")
      .selectAll("rect")
      .data(data)
      .join("rect")
      .attr("x", (d, i) => x(i))
      .attr("y", (d) => y(d.quantity))
      .attr("height", (d) => y(0) - y(d.quantity))
      .attr("width", x.bandwidth())
      .on("mousemove", mousemove)
      .on("mouseleave", mouseleave)
      .on("mouseover", mouseover);


  }


  return (
    <>
      <div id={`d3graph${id}`}>
        <svg ref={d3Chart}>
          <g id={`plotarea${id}`}></g>
          <g fill="#DC1623" stroke="#DC1623"  strokeWidth={2} id={`tooltipArea${id}`}>
            <text id={`tooltip-area__text${id}`}></text>
          </g>
          
            <text fill="#DC1623" stroke="#DC1623"  strokeWidth={1} id={`x${id}`}></text>
            <text fill="#DC1623" stroke="#DC1623"  strokeWidth={1} id={`y${id}`}></text>
        </svg>
        {/* 
        <svg className="my_dataviz" height='300' width='450'></svg>
         */}
      </div>
    </>
  );
};
