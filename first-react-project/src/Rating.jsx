function Rating({ rating }) {
  //   const styles = { fontSize: "10px", color: "#FFD700" };
  const star = "⭐";
  return (
    <div>
      {rating}
      {star}
    </div>
  );
}
export default Rating;
