const Overview = (props: { overview: string }) => {
  return (
    <div className="bg-gray-200 rounded-md text-[18px] font-normal px-10 py-5">
      <div dangerouslySetInnerHTML={{ __html: props.overview }} />
    </div>
  );
};

export default Overview;
