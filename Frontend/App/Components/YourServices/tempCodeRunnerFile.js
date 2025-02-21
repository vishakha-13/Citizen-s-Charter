const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    height: 50,
    width: 150,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginLeft: 10,
  },
  inputAndroid: {
    height: 50,
    width: 150,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginLeft: 10,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    fontSize: 21,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
    color: '#333',
  },
  divider: {
    height: 2,
    backgroundColor: '#333',
    marginVertical: 8,
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    position: 'relative',
  },
  searchBar: {
    flex: 1,
    height: 50,
    borderColor: '#333',
    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingRight: 40,
    backgroundColor: '#fff',
  },
  searchIcon: {
    position: 'absolute',
    right: 12,
    top: '50%',
    transform: [{ translateY: -12 }],
  },
  cardContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: screenWidth * 0.9,
    height: screenHeight * 0.75,
    borderRadius: 16,
    padding: 16,
    marginHorizontal: screenWidth * 0.05,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 4,
    justifyContent: 'space-between',
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
    textAlign: 'center',
  },
  cardDescription: {
    fontSize: 16,
    color: '#666',
    flex: 1,
  },
  cardHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#444',
    marginVertical: 4,
  },
  cardText: {
    fontSize: 20,
    color: '#666',
    marginVertical: 2,
  },
  moreButton: {
    backgroundColor: '#333',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  moreButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});
