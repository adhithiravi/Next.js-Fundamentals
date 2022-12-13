import { speakerJson } from "../page";
import styles from "../../conference.module.css";

function fetchSpeakerInfo(params) {
  const speakerInfo = [];

  speakerJson.speakers.map((speaker) => {
    if (speaker.name == params.slug) return speakerInfo.push(speaker);
  });

  return speakerInfo;
}

export default function Page({ params }) {
  const speakerInfo = fetchSpeakerInfo(params);
  const { name, bio, id, sessions } = speakerInfo[0];

  return (
    <div key={id} className={styles.infoContainer}>
      <h3 className={styles.titleText}>{name}</h3>
      <h5 className={styles.descText}>About: {bio}</h5>
      {sessions &&
        sessions.map(({ name, id }) => (
          <div key={id}>
            <h5 className={styles.descText}>Session: {name}</h5>
          </div>
        ))}
    </div>
  );
}
