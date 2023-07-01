import * as React from "react";
import Paper from "@mui/material/Paper";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  WeekView,
  DayView,
  Appointments,
  Toolbar,
  DateNavigator,
  TodayButton,
  ViewSwitcher,
  AppointmentTooltip,
  AppointmentForm,
  Resources,
  AllDayPanel,
  CurrentTimeIndicator,
  MonthView,
} from "@devexpress/dx-react-scheduler-material-ui";

import "./Calendar.css";
import { useState } from "react";
import {
  externeaza,
  findYourAppointments,
  removeAppointment,
  uploadIcsFile,
} from "../../services/AppoimentService";
import { useEffect } from "react";
import { allRooms } from "../../services/RoomService";
import Navbar from "../navbar/Navbar";

import IconButton from "@mui/material/IconButton";
import MoreIcon from "@mui/icons-material/MoreVert";
import { styled } from "@mui/material/styles";
import classNames from "clsx";
import {
  ClickAwayListener,
  Grow,
  MenuItem,
  MenuList,
  Popper,
} from "@mui/material";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaBed } from "react-icons/fa";

const currentDate = new Date();

const getClassByLocation = (location) => {
  if (location === "Room 1") return classes.firstRoom;
  if (location === "Room 2") return classes.secondRoom;
  return classes.thirdRoom;
};

const StyledIconButton = styled(IconButton)(() => ({
  [`&.${classes.commandButton}`]: {
    backgroundColor: "rgba(255,255,255,0.65)",
  },
}));

const PREFIX = "Demo";
const classes = {
  icon: `${PREFIX}-icon`,
  textCenter: `${PREFIX}-textCenter`,
  firstRoom: `${PREFIX}-firstRoom`,
  secondRoom: `${PREFIX}-secondRoom`,
  thirdRoom: `${PREFIX}-thirdRoom`,
  header: `${PREFIX}-header`,
  commandButton: `${PREFIX}-commandButton`,
};

const StyledAppointmentTooltipHeader = styled(AppointmentTooltip.Header)(
  () => ({})
);

const Header = ({ children, appointmentData, ...restProps }) => {
  const [open, setOpen] = React.useState(false);
  const prevOpen = React.useRef(open);
  const anchorRef = React.useRef(null);
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }
    prevOpen.current = open;
  }, [open]);

  const handleRemove = (id) =>{
    removeAppointment(id)
  }
  const handleExternare = (id) =>{
    externeaza(id)
  }
  console.log(appointmentData)
  return (
    <StyledAppointmentTooltipHeader {...restProps}>
      <StyledIconButton
        /* eslint-disable-next-line no-alert */
        onClick={() => handleToggle()}
        className={classes.commandButton}
        size="large"
        ref={anchorRef}
      >
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom-start" ? "left top" : "left bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                  >
                    <MenuItem onClick={() => handleRemove(appointmentData.id)}>
                      Remove
                      <RiDeleteBin5Line
                        style={{ marginLeft: "5PX" }}
                      ></RiDeleteBin5Line>
                    </MenuItem>
                    {appointmentData.location !== null && (
                      <MenuItem onClick={() =>  handleExternare(appointmentData.id)}>
                        Externeaza
                        <FaBed style={{ marginLeft: "5PX" }}></FaBed>
                      </MenuItem>
                    )}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
        <MoreIcon />
      </StyledIconButton>
    </StyledAppointmentTooltipHeader>
  );
};

function Calendar() {
  const [calendarData, setCalendarData] = useState([]);
  const [resources, setResources] = useState([
    {
      fieldName: "location",
      title: "Location",
      instances: [],
    },
  ]);

  const user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    findYourAppointments(user.id).then((res) => {
      setCalendarData(res.data);
      console.log(res.data)
    });
    allRooms().then((res) => {
      setResources((resources) => [
        ...resources.map((resource) => {
          if (resource.fieldName === "location") {
            return {
              ...resource,
              instances: res.data,
            };
          }
          return resource;
        }),
      ]);
    });
  }, []);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      uploadIcsFile(file, user.id);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="import">
        <input type="file" onChange={handleFileChange} />
      </div>
      <div className="clalendar-div">
        <Scheduler data={calendarData}>
          <ViewState defaultCurrentDate={currentDate} />
          <WeekView startDayHour={9} endDayHour={20} />
          <DayView startDayHour={9} endDayHour={20} />
          <Toolbar />
          <DateNavigator />
          <TodayButton />
          <MonthView />
          <ViewSwitcher />
          <Appointments />
          <AppointmentTooltip headerComponent={Header} showCloseButton />
          <CurrentTimeIndicator
            shadePreviousCells={true}
            shadePreviousAppointments={true}
            updateInterval={10000}
          />
          <Resources data={resources} />
        </Scheduler>
      </div>
    </div>
  );
}

export default Calendar;
