// @flow

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  AnimatedView,
  Panel,
  EarningGraph as EarningGraphComponent,
} from '../../components';
import Highlight from 'react-highlight';

type Props = {
  actions: {
    enterEarningGraph: () => any,
    leaveEarningGraph: () => any,
  },
};

const source = `
  // import
  import { EarningGraph } from './_SOMEWHERE_/components';

  // labels and data (in state for example):
  state = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        fillColor: 'rgba(220,220,220,0.2)',
        strokeColor: 'rgba(220,220,220,1)',
        pointColor: 'rgba(220,220,220,1)',
        pointStrokeColor: '#fff',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(220,220,220,1)',
        data: [65, 59, 80, 81, 56, 55, 40]
      },
      {
        label: 'My Second dataset',
        fillColor: 'rgba(151,187,205,0.2)',
        strokeColor: 'rgba(151,187,205,1)',
        pointColor: 'rgba(151,187,205,1)',
        pointStrokeColor: '#fff',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(151,187,205,1)',
        data: [28, 48, 40, 19, 86, 27, 90]
      }
    ]
  };

  // in render():
  <div className="row">
    <div className="col-md-8 col-md-offset-2">
      <EarningGraph
        labels={this.state.labels}
        datasets={this.state.datasets}
      />
    </div>
  </div>
`;

function EarningGraph({
  actions: { enterEarningGraph, leaveEarningGraph },
}: Props) {
  const [labels] = useState([
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
  ]);
  const [datasets] = useState([
    {
      label: 'My First dataset',
      fillColor: 'rgba(220,220,220,0.2)',
      strokeColor: 'rgba(220,220,220,1)',
      pointColor: 'rgba(220,220,220,1)',
      pointStrokeColor: '#fff',
      pointHighlightFill: '#fff',
      pointHighlightStroke: 'rgba(220,220,220,1)',
      data: [65, 59, 80, 81, 56, 55, 40],
    },
    {
      label: 'My Second dataset',
      fillColor: 'rgba(151,187,205,0.2)',
      strokeColor: 'rgba(151,187,205,1)',
      pointColor: 'rgba(151,187,205,1)',
      pointStrokeColor: '#fff',
      pointHighlightFill: '#fff',
      pointHighlightStroke: 'rgba(151,187,205,1)',
      data: [28, 48, 40, 19, 86, 27, 90],
    },
  ]);

  useEffect(() => {
    enterEarningGraph();

    return () => {
      leaveEarningGraph();
    };
  }, []);

  return (
    <AnimatedView>
      {/* preview: */}
      <div className="row">
        <div className="col-xs-12">
          <Panel
            title="Earning graph"
            hasTitle={true}
            bodyBackGndColor={'#F4F5F6'}
          >
            <div className="row">
              <div className="col-md-8 col-md-offset-2">
                <EarningGraphComponent labels={labels} datasets={datasets} />
              </div>
            </div>
          </Panel>
        </div>
      </div>
      {/* source: */}
      <div className="row">
        <div className="col-xs-12">
          <Panel title="Source" hasTitle={true}>
            <Highlight className="javascript">{source}</Highlight>
          </Panel>
        </div>
      </div>
    </AnimatedView>
  );
}

EarningGraph.displayName = 'EarningGraph';

EarningGraph.propTypes = {
  actions: PropTypes.shape({
    enterEarningGraph: PropTypes.func.isRequired,
    leaveEarningGraph: PropTypes.func.isRequired,
  }),
};

export default EarningGraph;
