using Calculator.Libraries.Implementation;

namespace Calculator.Tests
{
    [TestFixture]
    public class CalculatorTests
    {
        [Test]
        public void Add_WhenCalled_ReturnsSum()
        {
            // Arrange
            var calculator = new SimpleCalculator();

            // Act
            int result = calculator.Add(2, 3);

            // Assert
            Assert.That(result, Is.EqualTo(5));
        }

        [Test]
        public void Subtract_WhenCalled_ReturnsDifference()
        {
            // Arrange
            var calculator = new SimpleCalculator();

            // Act
            int result = calculator.Subtract(5, 3);

            // Assert
            Assert.That(result, Is.EqualTo(2));
        }
    }
}