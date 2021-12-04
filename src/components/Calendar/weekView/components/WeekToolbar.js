import {Row, Col, Button, Icon, Tooltip} from 'antd';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import React from 'react';
import {
  toolbar,
  toolbarDate,
  appTitle,
  alignRight,
  spacify,
  weekButtons,
} from '../styles';
import moment from 'moment';

function WeekToolbar (props) {
  const formattedDate = moment (props.startDate).format ('MMM YYYY');
  return (
    <Row type="flex" gutter={4} style={toolbar}>
      <Col span={4} offset={3} style={appTitle}>
        <Icon type="calendar" style={spacify} />Meeting Calendar
      </Col>
      <Col span={2} offset={8} style={alignRight}>
        <Tooltip placement="topLeft" title={moment ().format ('dddd, MMM D')}>
          <Button onClick={props.goToToday}>Today</Button>
        </Tooltip>
      </Col>

      <Col span={2} style={weekButtons}>
        {/* <Button onClick={props.goToPreviousWeek} style={spacify} icon="left" /> */}
        <ArrowBackIosNewIcon onClick={props.goToPreviousWeek} />
        <ArrowForwardIosIcon onClick={props.goToNextWeek}/>

      </Col>

      <Col span={2} style={toolbarDate}>
        {formattedDate}
      </Col>

    </Row>
  );
}

export default WeekToolbar;
