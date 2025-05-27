import PropTypes from 'prop-types';

const Footer = ({ data }) => {
  
  const date = new Date;
  const currentYear = date.getFullYear();

  return (
    <footer class="footer text-center pt-5 pb-3 mt-5 text-gray-600 text-sm">
    <p>Made with ❤️ using React & Bootstrap</p>
    <p>© 2025 Charifa Bounagat</p>
   
</footer>

  
  )
}
Footer.propTypes = {
  data: PropTypes.object
}

export default Footer;
