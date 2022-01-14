using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace FrogJump.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class BMIController : ControllerBase
    {

        private readonly ILogger<BMIController> _logger;

        public BMIController(ILogger<BMIController> logger)
        {
            _logger = logger;
        }
        
        [HttpPost("CalBMI")]        
        public decimal CalBMI(decimal height, decimal weight)
        {
            if (height == 0) return 0;
            decimal result = weight / ((height / 100) * (height / 100));
            return Math.Round(result, 2, MidpointRounding.AwayFromZero);
        }

        //[HttpPost("CalBMI2")]
        //public decimal CalBMI2(test model)
        //{
        //    if (model.height == 0) return 0;
        //    decimal result = model.weight / ((model.height / 100) * (model.height / 100));
        //    return Math.Round(result, 2, MidpointRounding.AwayFromZero);
        //}

        //public class test
        //{
        //    public decimal height { set; get; }
        //    public decimal weight { set; get; }
        //}
    }

}


