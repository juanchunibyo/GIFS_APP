interface props {
  title: string;
  description: string;
}

export const CustomHeader = ({ title, description }: props) => {
  return (
    <div className="content-center">
      <h1>{title}</h1>
      <p>Descubre y comparte el gif perfecto</p>
      {description && <p>{description}</p>}
    </div>
  );
};
