const Score = ({ numCorrect, numQ }) => {
  return (
    <p className="text">
      نتيجتك : {numCorrect}/{numQ}
    </p>
  );
};

export default Score;
