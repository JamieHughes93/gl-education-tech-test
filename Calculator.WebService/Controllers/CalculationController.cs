using Calculator.Libraries.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Calculator.WebService.Controllers
{
    [Route("api/calculator")]
    [ApiController]
    public class CalculatorController : ControllerBase
    {
        private readonly ISimpleCalculator _calculator;

        public CalculatorController(ISimpleCalculator calculator)
        {
            _calculator = calculator;
        }

        [HttpGet("add")]
        public IActionResult Add(int start, int amount)
        {
            int result = _calculator.Add(start, amount);
            return Ok(result);
        }

        [HttpGet("subtract")]
        public IActionResult Subtract(int start, int amount)
        {
            int result = _calculator.Subtract(start, amount);
            return Ok(result);
        }
    }
}
