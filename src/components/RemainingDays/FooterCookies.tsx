import EachCookie from './EachCookie';

function FooterCookies() {
  const updownList = ['up', '', 'up', '', 'up', '', 'up', '', 'up', '', 'up', ''];

  const rendering = () => {
    const result = [];
    for (let i = 0; i < updownList.length; i += 1) {
      result.push(<EachCookie setting={updownList[i]} key={i} />);
    }
    return result;
  };

  return (
    <div className="fixed flex justify-center bottom-0">{rendering()}</div>
    // {Object.values(updownList)?.map((item: string) => (
    //   <EachCookie setting={item} key={item} />
    // ))}
    // <div className="fixed flex justify-center bottom-0">
    //   <EachCookie setting="up" />
    //   <EachCookie />
    //   <EachCookie setting="up" />
    //   <EachCookie />
    //   <EachCookie setting="up" />
    //   <EachCookie />
    //   <EachCookie setting="up" />
    //   <EachCookie />
    //   <EachCookie setting="up" />
    //   <EachCookie />
    //   <EachCookie setting="up" />
    // </div>
  );
}

export default FooterCookies;