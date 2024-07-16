import { speakerJson } from "../page";
import styles from "../../conference.module.css";

async function getSpeakerInfo(slug) {
  // API call, DB Query, fetch from the app

  const speakers = await fetch(
    "https://raw.githubusercontent.com/adhithiravi/Consuming-GraphqL-Apollo/master/api/data/speakers.json"
  );

  let speakersList = await speakers.json();
  speakersList = speakersList.speakers;

  return getSpeakerDetails(speakersList, atob(slug));
}

function getSpeakerDetails(speakers, speakerId) {
  const speaker = speakers.find(({ id }) => id === speakerId);

  if (speaker === undefined) {
    throw new Error(`Speaker with id ${speakerId} not found`);
  }

  return speaker;
}

export default async function Page({ params: { slug } }) {
  const speakerInfo = await getSpeakerInfo(slug);

  const { name, bio, sessions } = speakerInfo;

  return (
    <div className={styles.infoContainer}>
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
