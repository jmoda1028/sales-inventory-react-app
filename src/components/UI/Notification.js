const Notification = (props) => {
  let specialClasses = '';

  if (props.status === 'error') {
    specialClasses = 'notification-error';
  }
  if (props.status === 'success') {
    specialClasses = 'notification-success';
  }

  const cssClasses = `'notification' ${specialClasses}`;

  return (
    <section className={cssClasses}>
      <h2>{props.title}</h2>
      <p>{props.message}</p>
    </section>
  );
};

export default Notification;
