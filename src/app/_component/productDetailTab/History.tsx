const History = (props:{history:string}) => {
  return (
    <div className="bg-gray-200 font-normal rounded-md text-[18px] px-10 py-5">
        <div dangerouslySetInnerHTML={{ __html: props.history }} />
    </div>
  );
};

export default History;
