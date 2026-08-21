// src/assets/assets.ts

// Club Images
import AIClubImg from './AI_club.jpg';
import RoboticsClubImg from './Robotics_club_placeholder.jpg';

// Project Images
import TetrisImg from './tetris.jpg';
import ToxImg from './Tox.jpg';
import NautichatImg from './Nautichat.jpg';
import BatteryOCR from './BatteryOCRProject.jpg'
import PrintFarm from './PrintAutomationCPAP.png'

// Icons
import githubIcon from "./github-mark-white.png";
import linkedinIcon from "./InBug-White.png";
import emailIcon from "./email.png";
import fileIcon from "./file-white.png";

//Misc
import leftBackIcon from "./left-back.png";

// Profile Image
import profileImg from './Me.jpg';

// Export everything in an object (grouped by type)
export const Images = {
  projects: {
    Tetris: TetrisImg,
    Tox: ToxImg,
    Nautichat: NautichatImg,
    BatteryOCR: BatteryOCR,
    PrintFarm: PrintFarm
  },
  icons: {
    github: githubIcon,
    linkedin: linkedinIcon,
    email: emailIcon,
    file: fileIcon
  },
  clubs: {
    AIClub: AIClubImg,
    RoboticsClub: RoboticsClubImg
  },
  misc: {
    profile: profileImg,
    leftBack: leftBackIcon
  },
};