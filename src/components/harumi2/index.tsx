// See https://project.pages.drupalcode.org/canvas/ for documentation on how to build a code component
import { getSiteData as iCanHazSiteData, getPageData } from 'drupal-canvas';


const Component = ({
  text = "harumi2",
}) => {
  const hi = getPageData().pageTitle;
  const site = iCanHazSiteData();
  return (
    <div className="text-3xl">
      Hi {text}
      <br/>
      Page title: {hi}
      <br/>
      Site page number: {site.branding.homeUrl}
    </div>
  );
};

export default Component;
