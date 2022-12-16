import { speakerJson } from "../page";
import styles from "../../conference.module.css";

function fetchSpeakerInfo(params) {
  // API call, DB Query, fetch from the app

  const speakerInfo = speakerJson.speakers?.find(
    (speaker) => speaker.name == params.slug
  );

  return speakerInfo;
}

export default async function Page({ params }) {
  const speakerInfo = fetchSpeakerInfo(params);

  const { id, name, bio, sessions } = speakerInfo;

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
